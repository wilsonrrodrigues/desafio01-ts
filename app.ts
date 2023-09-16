import { BlackAccount } from './class/BlackAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(1)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getLoan(1000))

const blackAccount: BlackAccount = new BlackAccount('Junior', 5)
console.log(blackAccount.deposit(5))