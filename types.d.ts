
export type BookResponse = {
    id: number
    author_id: string;
    book_name: string;
    created_at?: Date;
    published_at?: Date;
  }
  
 export type Props = {
    params: {
        id: number
    }
  }
  
  
  export type OrderResource = {
    createdBy?: string;
    bookId: string;
    customer_name: string;
    quantity?: number;
  }
  
  export type OrderBody = {
    createdBy?: string;
    bookId: string;
    customer_name: string;
    quantity?: number;
  }
  