export interface ApiResponse {
    success: boolean;
    data?: any;
    message?: {
        code: string;
        text: string;
    }
}