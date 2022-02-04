from django.contrib import admin

# Register your models here.
from .models import Registration


class RegistrationAdmin(admin.ModelAdmin):
    # fields which are shown when looking at a list of instances
    list_display = ('email', 'status', 'code', 'type')


admin.site.register(Registration, RegistrationAdmin)
