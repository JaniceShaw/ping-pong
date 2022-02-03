from django.contrib import admin
from category.models import SubCategory, Category

admin.site.register(Category)


class SubCategoryAdmin(admin.ModelAdmin):
    # fields which are shown when looking at a list of instances
    list_display = ('name', )
    ordering = ('category',)
    list_filter = ('category',)


admin.site.register(SubCategory, SubCategoryAdmin)
