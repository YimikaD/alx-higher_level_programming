#!/usr/bin/python3
def square_matrix_simple(matrix=[]):

    current = [[0 for _ in range(len(row))] for row in matrix]

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            current[i][j] = matrix[i][j] ** 2

    return current
