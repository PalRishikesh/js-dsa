### Binary Tree
- At most 2 Children  (can have less child)
- Exactly 1 Root
- Exactly 1 path b/w root and any node (not reverse)
- Empty tree can be considered as binary tree

### Binary Search Tree
 - All the aboe point
 - left sub keys are less than Root key
 - Right sub keys are greater than Root key
 - Left & Right subtree must be BST (if there is any sub tree)
 - No Duplicate

 ### Deletion of Node in BST
 - Leaf Node (no children), make it null
 - 1 Child (left/right), send that children to current root
 - 2 Node
    - In-order success (smallest key in right subtree)