declare class RequestProtector {
    data: string;
    reject: any;
    constructor(data: {
        url: string;
        params: any;
    }, reject: any);
    protected addUrlLoading: () => void;
    protected removeUrlLoading: () => void;
    protected setter: (status?: boolean) => void;
    private get loading();
    handleRequest: (sendRequest: any) => void;
}
export default RequestProtector;
