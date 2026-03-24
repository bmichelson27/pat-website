import type { SubmitBid } from "../models/silent-auction-item";
import { environment } from "../environments/environment";

class AuctionItemService {
    private getRequestUrl(path: string): string {
        return `${environment.apiBaseUrl}${path}`;
    }

    private getHeaders(): Record<string,string> {
        return {
            'Content-Type': 'application/json'
        };
    }

    async submitBid(record: SubmitBid): Promise<object> {
        const requestUrl = this.getRequestUrl(`/submit`);
        const response = await fetch(requestUrl, {
            headers: this.getHeaders(),
            method: 'POST',
            body: JSON.stringify(record)
        });

        if(!response.ok){
            throw new Error(`error`);
        }

        return response;
    }
}

export const auctionItemService = new AuctionItemService()