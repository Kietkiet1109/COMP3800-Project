declare module 'mobile-payments-sdk-react-native' {
    export function showSettings(): Promise<void>;
    export function authorize(token: string, locationId: string): Promise<{ authorizedLocation: any, authorizationState: AuthorizationState }>;
    export function startPayment(paymentParameters: PaymentParameters, promptParameters: PromptParameters): Promise<any>;
    export function observeAuthorizationChanges(callback: (newStatus: AuthorizationState) => void): void;
    export function hideMockReaderUI(): Promise<void>;
    export function showMockReaderUI(): Promise<void>;

    // Define your own types for PaymentParameters and PromptParameters
    export interface PaymentParameters
    {
        amountMoney: { amount: number, currencyCode: CurrencyCode };
        idempotencyKey: string;
        note: string;
        appFeeMoney?: { amount: number, currencyCode: CurrencyCode };
    }

    export interface PromptParameters
    {
        additionalMethods: AdditionalPaymentMethodType[];
        mode: PromptMode;
    }

    export enum AuthorizationState
    {
        AUTHORIZED,
        NOT_AUTHORIZED
    }

    export enum CurrencyCode
    {
        USD = 'USD',
        CAD = 'CAD',
        // Add other currency codes as needed
    }

    export enum AdditionalPaymentMethodType
    {
        ALL = 'ALL',
        // Add other payment methods as needed
    }

    export enum PromptMode
    {
        DEFAULT = 'DEFAULT',
        // Add other prompt modes as needed
    }
}
