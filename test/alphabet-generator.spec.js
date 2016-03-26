var alpha = require('../index.js');

describe('Alphabet generator', function() {
    it('should be defined', function() {
        expect(alpha).toBeDefined();
    });

    it('should get B to D alphabets', function() {
        expect(alpha.range('B', 'D').get())
            .toEqual(['B', 'C', 'D']);
    });

    it('should get lowercase alphabet', function() {
        expect(alpha.lower().get()[0])
            .toEqual('a');
    });

    it('should get uppercase alphabet', function() {
        expect(alpha.upper().get()[0])
            .toEqual('A');
    });

    it('should return empty array on weird range', function() {
        expect(alpha.range('Z', 'A').get()).toEqual([]);
    });

    it('should set default range', function() {
        var result = alpha.range().get();
        expect(result[0]).toEqual('A');
        expect(result[result.length - 1]).toEqual('Z');
    });

    it('should random in range', function() {
        expect(alpha.range('A', 'C').random().get().indexOf('D'))
            .toEqual(-1);
    });
});