export class Branches {
    ifsc: string;
    bankId: any;
    branch: string;
    address: string;
    city: string;
    district: string;
    state: string;
    bankName: string;
    constructor(
        ifsc: string,
        bankId: any,
        branch: string,
        address: string,
        city: string,
        district: string,
        state: string,
        bankName: string,
    ) {
        this.ifsc = ifsc;
        this.bankId = bankId;
        this.branch = branch;
        this.address = address;
        this.city = city;
        this.district = district;
        this.state = state;
        this.bankName = bankName;
    }
}
export class BranchesMaker{
    static castInto(obj: any): any {
        return new Branches(
            obj.ifsc,
            obj.bank_id,
            obj.branch,
            obj.address,
            obj.city,
            obj.district,
            obj.state,
            obj.bank_name
        );
    }
}
