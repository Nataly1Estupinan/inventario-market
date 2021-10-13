from django.db import models
from django.utils.timezone import datetime

# Create your models here.
class Productos(models.Model):
  pro_id=models.BigAutoField(primary_key=True)
  pro_name= models.CharField(max_length = 256)
  pro_provider=models.CharField(max_length = 256)
  pro_existences=models.CharField(max_length = 256)
  pro_date=models.DateTimeField(null=True)
  pro_description=models.CharField(max_length = 456)
  pro_category=models.CharField(max_length = 256)