export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }
  
  deposit = (depositValue: number): number => {
    if(this.validateStatus()){
      if(depositValue <= 0) {
        throw new Error('Deposito inválido')
      }
    }
    return this.balance += depositValue
  }

  withdraw = (withdrawValue: number): number => {
    if(this.validateStatus()){
      if(withdrawValue <= 0 && withdrawValue > this.balance) {
        throw new Error('Valor não existente')
      }
    }
    return this.balance -= withdrawValue
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
