from rest_framework import permissions


class AllowAny(permissions.AllowAny):
    pass


class IsAuthenticated(permissions.IsAuthenticated):
    pass


class IsAdminOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_staff


class IsAuthenticatedOrReadOrCreateUser(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated()

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS or request.method is 'POST':
            return True
        return request.user.is_authenticated() and request.user == obj
