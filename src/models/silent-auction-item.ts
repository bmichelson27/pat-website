export interface SilentAuctionItem {
    id: string;
    name: string;
    image: string;
    description: string;
}

export interface SubmitBid {
    name: string;
    phoneNumber: string;
    email: string;
    amount:number;
    itemId:number;
}