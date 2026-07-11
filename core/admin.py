from django.contrib import admin
from .models import Category, Product, Order


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug')
    search_fields = ('name', 'slug')
    ordering = ('name',)
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'category',
        'price',
        'stock',
        'created_at',
        'has_image',
    )
    list_filter = ('category', 'created_at')
    search_fields = ('name', 'description', 'category__name')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)

    def has_image(self, obj):
        return bool(obj.image)
    has_image.boolean = True
    has_image.short_description = "Imagen"


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user',
        'total_price',
        'is_paid',
        'created_at',
    )
    list_filter = ('is_paid', 'created_at')
    search_fields = ('user__username', 'user__email')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)
