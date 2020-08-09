import countByPriority from '../../selectors/priorityCounter'
import mockTodos from '../fixtures/todosFixture'

test('Should return zero when no notes', () => {
    const result = countByPriority([])
    expect(JSON.stringify(result)).toBe(JSON.stringify([0,0,0]))
})

test('Should correctly count with one note', () => {
    const result = countByPriority([mockTodos[0]])
    expect(JSON.stringify(result)).toBe(JSON.stringify([1,0,0]))
})

test('Should correctly count with multiply notes', () => {
    const result = countByPriority(mockTodos)
    expect(JSON.stringify(result)).toBe(JSON.stringify([1,1,1]))
})