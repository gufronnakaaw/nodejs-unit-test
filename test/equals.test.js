test('test toBe', () => {
    const name = 'wildan'
    const hello = `hello ${name}`

    expect(hello).toBe('hello wildan')
})

test('test toEqual', () => {
    let person = {
        id: 1
    }

    Object.assign(person, { name: 'Wildan' })

    expect(person).toEqual({ id: 'test', name: 'Wildan' })
})