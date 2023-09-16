import { DioAccount } from "./DioAccount";

export class BlackAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (depositValue: number): number => {
    if(this.validateStatus()){
      if(depositValue <= 0) {
        throw new Error('Deposito inválido')
      }
    }
    return this.balance += depositValue +10
  }
}