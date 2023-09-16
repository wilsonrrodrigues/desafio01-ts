import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): number => {
    if(this.validateStatus()){
      if(loanValue <= 0) {
        throw new Error('Valor não existente')
      }
    }  
    return this.balance += loanValue
  }   
}
