from django.contrib import admin

# Register your models here.
from member_request.models import MemberRequest

admin.site.register(MemberRequest)
