from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.
class Project(models.Model):
    STATUS_CHOICES = (
        ('In Development', 'In Development'),
        ('In Testing', 'In Testing'),
        ('In Production', 'In Production'),)
    name = models.CharField(max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    slug = models.SlugField(max_length=200, unique=True)
    repository_url = models.URLField(max_length=200, null=True, blank=True)
    release_date = models.DateField(null=True, blank=True)
    stable_version = models.CharField(max_length=50, null=True, blank=True)
    development_version = models.CharField(max_length=50, default='0.0.1')
    description = models.TextField()
    start_date = models.DateField(auto_now_add=True)
    last_update = models.DateField()
    current_status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='In Development')

    class Meta:
        ordering = ['-last_update']
    def __str__(self):
        return self.name

class Article(models.Model):
    STATUS_CHOICES = (
        ('Draft', 'Draft'),
        ('Published', 'Published'),)
    title = models.CharField(max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    slug = models.SlugField(max_length=200, unique=True)
    content = models.TextField()
    created_date = models.DateField(auto_now_add=True)
    published_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='Draft')
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    class Meta:
        ordering = ['-published_date']
    def __str__(self):
        return self.title

class Log(models.Model):
    STATUS_CHOICES = (
        ('Debug', 'Debug'),
        ('Info', 'Info'),
        ('Warning', 'Warning'),
        ('Error', 'Error'),
        ('Critical', 'Critical'),)
    title = models.CharField(max_length=50)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    slug = models.SlugField(max_length=50, unique=True)
    content = models.CharField(max_length=200)
    created_date = models.DateField(auto_now_add=True)
    resolve_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='Debug')
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    class Meta:
        ordering = ['-created_date']
    def __str__(self):
        return self.title

