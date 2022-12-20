export type Sale = {
    seller_payme_id:string,
    seller_id:string,
    sale_payme_id:string,
    sale_payme_code:string,
    transaction_id:string,
    sale_created:string,
    sale_status:string,
    sale_currency:string,
    sale_price:number,
    sale_price_after_fees:number,
    sale_description:string,
    sale_installments:number,
    sale_vat:string,
    sale_paid_date:string,
    sale_auth_number:string,
    sale_release_date:string,
}
export type SaleResponse = {
    items_count:number
    items:Sale[]
}
