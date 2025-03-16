#!/usr/bin/env node

/**
 * This script is used to reset the project to a blank state.
 * It moves the /app directory to /app-example and creates a new /app directory with an index.tsx and _layout.tsx file.
 * You can remove the `reset-project` script from package.json and safely delete this file after running it.
 */

const fs = require('fs').promises;
const path = require('path');

const root = process.cwd();
const oldDirPath = path.join(root, 'app');
const newDirPath = path.join(root, 'app-example');
const newAppDirPath = path.join(root, 'app');

const indexContent = `import { Text, View } from "react-native";

const Index = () => (
    <View style={ { flex: 1, justifyContent: "center", alignItems: "center" } }>
        <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
);

export default Index;`;

const layoutContent = `import { Stack } from "expo-router";

const RootLayout = () => (
    <Stack>
        <Stack.Screen name="index" />
    </Stack>
);

export default RootLayout`;

(async () =>
{
    try
    {
        await fs.rename(oldDirPath, newDirPath);
        console.log('/app moved to /app-example.');
        await fs.mkdir(newAppDirPath, { recursive: true });
        console.log('New /app directory created.');

        await fs.writeFile(path.join(newAppDirPath, 'index.tsx'), indexContent);
        console.log('app/index.tsx created.');

        await fs.writeFile(path.join(newAppDirPath, '_layout.tsx'), layoutContent);
        console.log('app/_layout.tsx created.');
    } 
    catch (error) { console.error(`Error: ${ error.message }`); }
})();
