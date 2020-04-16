import random
import sys

length = int(sys.argv[1])

password = ""

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
specials = ['!','@','#','$','%','^','&']
numbers = [0,1,2,3,4,5,6,7,8,9]

i = 0

def generate_string():
    global password
    if random.choice([0,1]) == 1:
        password += random.choice(letters).upper()
    else:
        password += random.choice(letters)

while i < length:
    generate_string()
    i += 1

print(password)

sys.stdout.flush()