from django.shortcuts import render


def index(request):
    paleta_colores = color_picker() 
    return render(request, 'index.html', {'paleta_colores': paleta_colores})

def color_picker():
    paleta_colores= ['#000000', '#545454', '#737373', '#A6A6A6', '#D9D9D9',
                  '#FFFFFF','#FF5757','#FF66C4','#CB6CE6','#8C52FF','#004346'
                  '#0097B2','#0CC0DF','#5CE1E6','#38B6FF','#5271FF','#004AAD',
                  '#00BF63','#7ED957','#C1FF72','#FFDE59','#FFBD59','#FF914D',
                  '#EEB4B3','#C179B9','#A42CD6','#502274','#2F242C','#C04ABC',
                  '#419D78','#273E47','#BD632F','#D8973C','#D8C99B','#A4243B',
                  '#9DD1F1','#DB3069','#D264B6','#A480CF','#779BE7','#49B6FF',
                  '#470024','#172A3A'
                  ]
    
    return paleta_colores

