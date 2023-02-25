public class Fibonacci {
    public static Integer calculateFibonacci(Integer n) {
        // Tratamento de erro para entrada negativa
        if (n < 0) {
            System.debug('Entrada inválida. O número deve ser maior ou igual a zero.');
            return null;
        }
        // Casos base da recursão
        else if (n == 0) {
            return 0;
        }
        else if (n == 1) {
            return 1;
        }
        // recursão
        else {
            return calculateFibonacci(n-1) + calculateFibonacci(n-2);
        }
    }
}
