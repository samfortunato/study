my_dict = {
  'sup': 1,
  'bro': 2,
  'dude': 3
}

my_list = [1, 2, 3, 4]

for num in my_list:
  print(num)

def print_nums(nums):
  for num in nums:
    print(num)

print_nums(my_list)

evens_to_50 = [i for i in range(51) if i % 2 == 0]

one_to_five_list = [x for x in range(1, 6)]
one_to_five_doubled = [x * 2 for x in range(1, 6)]
doubles_divisible_by_3 = [x * 2 for x in range(1, 6) if (x * 2) % 3 == 0]

even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]

lambda x: x % 3 == 0
is_divisible_by_three = lambda x: x % 3 == 0

filter(lambda x: x % 3 == 0, range(16))
filter(is_divisible_by_three, range(16))

binary_number = 0b1011

result = 0b1110 & 0b101
bin(result)
print(bin(result))
# 4

def check_bit_4(binary):
  bit_4_mask = 0b1000
  check = input & bit_4_mask

  if check > 0:
    return 'on'
  else:
    return 'off'

number = 0b110
mask = 0b1

bit_one_turned_on = number | mask

def flip_bit(number, nth_bit):
  flip_mask = 0b1 << nth_bit - 1
  flipped_bits = number ^ flip_mask

  return bin(flipped_bits)

class Point3D(object):
  def __init__(self, x, y, z):
    self.x = x
    self.y = y
    self.z = z
    
  def __repr__(self):
    return '(%d, %d, %d)' % (self.x, self.y, self.z)
  
my_point = Point3D(1, 2, 3)
print(my_point)
