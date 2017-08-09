/**
 * Created by Shubham on 29-07-2017.
 */

function calc()
{
    total=0; ct=0;
    for(gr=0; gr<6; gr++)
    {
        if(document.boxes.var1[gr].checked==true)
        {
            total=total+Math.pow(2,gr);
        }
    }
    document.boxes.outputbox.value="  "+total;
}