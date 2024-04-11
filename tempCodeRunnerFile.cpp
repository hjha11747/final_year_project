#include<iostream>
using namespace std;

int main()
{
    int res = 1;
    int n = 5;
    int x = 2;
    while(n)
    {
        if(n%2 != 0)
            res *= x;
        x*=x;
        n = n/2;

    }
    cout<<"\n"<<res;
    return 0;
}