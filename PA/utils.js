const hundreds = {0:' ', 1:'cento', 2:'duzentos', 3:'trezentos', 4:'quatrocentos', 5:'quinhentos',
6:'seiscentos', 7:'setecentos', 8:'oitocentos', 9:'novecentos'}
const decs = {0:' ', 1:'dez', 2:'vinte', 3:'trinta', 4:'quarenta', 5:'cinquenta',
6:'sessenta', 7:'setenta', 8:'oitenta', 9:'noventa'}
const unities = {0:' ', 1:'um', 2:'dois', 3:'tres', 4:'quatro', 5:'cinco',
6:'seis', 7:'sete', 8:'oito', 9:'nove'}
const specialCases = {'11':'onze', '12':'doze', '13':'treze', '14':'catorze', '15':'quinze', '16':'dezesseis',
                      '17':'dezessete', '18':'dezoito', '19':'dezenove'}

module.exports.hundreds = hundreds;
module.exports.decs = decs;
module.exports.unities = unities;
module.exports.specialCases = specialCases;
