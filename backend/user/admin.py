from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

User = get_user_model()


@admin.register(User)
class UserAdmin(UserAdmin):
    readonly_fields = ('date_joined',)
    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'type')}
         ),
    )
    # fields when reading / updating an instance
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'phone', 'profile_pic', 'type', 'description', 'lon',
                                      'lat', 'zip', 'city')}),
        ('Helper info', {'fields': ('helper_verified', 'helper_verify_pic', 'helper_available', 'helper_available_text',
                                    'helper_hourly_rate', 'helper_categories', 'helper_sub_categories')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        ('Groups', {'fields': ('groups',)}),
    )
    # fields which are shown when looking at a list of instances
    list_display = ('username', 'email', 'type', 'first_name', 'last_name', 'is_staff', 'is_superuser')
    ordering = ('email',)

    list_filter = ('type',)
