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
        print(request.method + " Method")
        if request.method in permissions.SAFE_METHODS or request.method == 'POST':
            print('Method is safe for now')
            return True
        return request.user.is_authenticated()

    def has_object_permission(self, request, view, obj):
        print(request.method + " Method")
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated() and request.user == obj
