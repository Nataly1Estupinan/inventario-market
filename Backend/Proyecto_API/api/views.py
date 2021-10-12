from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Products
import json


# Create your views here.

class ProductsView(View):

    @method_decorator(csrf_exempt)
    def  dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)


    def  get(self,request,pro_id= 0):
        if(pro_id>0):
            products=list(Products.objects.filter(pro_id=pro_id).values())
            if len(products) > 0:
                product=products[0]
                datos = {'message': "Aprobado", 'product':product}
            else:
                datos = {'message': "Producto no encontrado..."}
            return JsonResponse(datos)

        else:
            products = list(Products.objects.values())
            if len(products) > 0:
             datos={'message': "Aprobado", 'products':products}
            else:
                datos={'message': "Producto no encontrado..."}
            return JsonResponse(datos)

    def  post(self, request):
        # print(request.body)
        jd = json.loads(request.body)
        # print(jd)
        Products.objects.create(pro_name=jd['pro_name'], pro_provider=jd['pro_provider'],pro_existences=jd['pro_existences'],pro_date=jd['pro_date'],pro_description=jd['pro_description'],pro_category=jd['pro_category'])
        datos = {'message': "Aprobado"}
        return JsonResponse(datos)

    def  put(self, request, pro_id):
        jd = json.loads(request.body)
        products=list(Products.objects.filter(pro_id=pro_id).values())
        if len(products) > 0:
            product=Products.objects.get(pro_id=pro_id)
            product.pro_name=jd['pro_name']
            product.pro_provider=jd['pro_provider']
            product.pro_existences=jd['pro_existences']
            product.pro_date=jd['pro_date']
            product.pro_description=jd['pro_description']
            product.pro_category=jd['pro_category']
            product.save()
            datos = {'message': "Aprobado"}

        else:
            datos={'message': "Producto no encontrado..."}
        return JsonResponse(datos)
        
    def  delete(self, request, pro_id):
        products=list(Products.objects.filter(pro_id=pro_id).values())
        if len(products) > 0:
            Products.objects.filter(pro_id=pro_id).delete()
            datos = {'message': "Aprobado"}
        else:
             datos={'message': "Producto no encontrado..."}
        return JsonResponse(datos)



