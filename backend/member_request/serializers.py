# from django.contrib.auth import get_user_model
from rest_framework import serializers
from member_request.models import MemberRequest, MemberReview, HelperReview
# from user.serializers import UserSerializer
# User = get_user_model()


# all fields for making a new job request ()
class MemberRequestSerializer(serializers.ModelSerializer):
    # to get the logged-in user id
    member = serializers.PrimaryKeyRelatedField(read_only=True)

    def create(self, validated_data):
        request = self.context.get('request', None)
        member = request.user
        member_request = MemberRequest.objects.create(member=member, **validated_data)
        return member_request

    class Meta:
        model = MemberRequest
        fields = '__all__'


class MemberReviewSerializer(serializers.ModelSerializer):
    member_username = serializers.CharField(source='member_request.member.username', read_only=True)

    class Meta:
        model = MemberReview
        fields = ['id', 'text_content', 'rating', 'member_request', 'member_username', 'member']


class HelperReviewSerializer(serializers.ModelSerializer):
    helper_username = serializers.CharField(source='member_request.helper.username', read_only=True)

    class Meta:
        model = HelperReview
        fields = ['id', 'text_content', 'rating', 'member_request', 'helper_username', 'helper']

# not sure if need these check
class MemberReviewRateSerializer(serializers.ModelSerializer):
    # member_username = serializers.CharField(source='member_request.member.username', read_only=True)

    class Meta:
        model = MemberReview
        fields = ['rating']

# not sure if need these check
class HelperReviewRateSerializer(serializers.ModelSerializer):
    # member_username = serializers.CharField(source='member_request.member.username', read_only=True)

    class Meta:
        model = HelperReview
        fields = ['rating']


# list view of open and busy jobs
class ListMemberRequestSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    helper_username = serializers.CharField(source='helper.username', read_only=True)

    member_username = serializers.CharField(source='member.username', read_only=True)
    member_city = serializers.CharField(source='member.city', read_only=True)
    member_zip = serializers.CharField(source='member.zip', read_only=True)
    member_lon = serializers.FloatField(source='member.lon', read_only=True)
    member_lat = serializers.FloatField(source='member.lat', read_only=True)
    member_review = MemberReviewRateSerializer(many=False)
    helper_review = HelperReviewRateSerializer(many=False)

    class Meta:
        model = MemberRequest
        fields = ['id', 'title', 'created', 'img_one', 'description', 'budget', 'category_name', 'urgency',
                  'member_username', 'helper_username', 'member_zip', 'member_city', 'member_lon', 'member_lat',
                  'status', 'member_review', 'helper_review']


# to get all the reviews of a given helper
class HelperRatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = HelperReview
        fields = ['rating']


class MemberRatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = MemberReview
        fields = ['rating']
