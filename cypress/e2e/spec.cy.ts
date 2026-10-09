describe('template spec', () => {
	it('passes', () => {
		cy.visit('https://example.cypress.io')
	})
})
describe('My First Test', () => {
	it('clicks the link "type"', () => {
		cy.visit('https://example.cypress.io')

		cy.contains('type').click()
	})
})
// describe('My First Test', () => {
// 	it('Does not do much!', () => {
// 		expect(true).to.equal(false)
// 	})
// })
describe('My First Test', () => {
	it('Does not do much!', () => {
		expect(true).to.equal(true)
	})
})
