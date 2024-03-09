function describe_city(city: string, country: string = 'Pakistan' ): void{
    console.log(`${city} is in ${country}`)
}

describe_city('Karachi') // default scentence
describe_city('France', 'Europe')
describe_city('Lahore', 'punjab')

