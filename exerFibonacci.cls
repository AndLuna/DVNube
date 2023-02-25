função fibonacci(n)
    se n < 0 então
        retorne "n deve ser um número positivo."
    senão se n == 0 então
        retorne 0
    senão se n == 1 então
        retorne 1
    senão
        retorne fibonacci(n-1) + fibonacci(n-2)
    fim se
fim função