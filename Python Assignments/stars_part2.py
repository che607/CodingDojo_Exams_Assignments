def draw_stars_and_names(arr):
    idx = 0
    while idx < len(arr):
        if arr[idx] != str(arr[idx]):
            print arr[idx] * '*'
        else:
            print arr[idx][:1].lower() * len(arr[idx])
        idx += 1

draw_stars_and_names([4,"Tom",6,"Alejandro",4])
