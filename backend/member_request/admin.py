from django.contrib import admin

# Register your models here.
from member_request.models import MemberRequest, MemberReview, HelperReview


class MemberRequestAdmin(admin.ModelAdmin):
    # fields which are shown when looking at a list of instances
    list_display = ('title', 'status', 'urgency')
    ordering = ('status',)
    list_filter = ('status',)


admin.site.register(MemberRequest, MemberRequestAdmin)


class MemberReviewAdmin(admin.ModelAdmin):
    # fields which are shown when looking at a list of instances
    list_display = ('member_request', 'text_content', 'rating')
    ordering = ('member_request',)
    list_filter = ('rating',)


admin.site.register(MemberReview, MemberReviewAdmin)


class HelperReviewAdmin(admin.ModelAdmin):
    # fields which are shown when looking at a list of instances
    list_display = ('member_request', 'text_content', 'rating')
    ordering = ('member_request',)
    list_filter = ('rating',)


admin.site.register(HelperReview, HelperReviewAdmin)
