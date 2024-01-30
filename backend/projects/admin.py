from django.contrib import admin
from .models import Project, Article, Log
# Register your models here.
admin.site.register(Project)
admin.site.register(Article)
admin.site.register(Log)
