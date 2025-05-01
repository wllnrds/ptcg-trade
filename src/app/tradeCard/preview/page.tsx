'use client'
 
import { unzipData } from '@/lib/utils';
import { TData } from '@/types';
import { useSearchParams } from 'next/navigation'
import { Screen } from '../screen';
import { Suspense } from 'react';

export default function Page(){
    return <Suspense fallback={<div>Loading...</div>}>
        <LoadScreen />
    </Suspense>
}

function LoadScreen(){
    const searchParams = useSearchParams()
    const dataQuery = searchParams.get('data');
    const dataVersion = searchParams.get('version');

    const dataString = atob(dataQuery as string);

    
    let data : TData | null = null;
    
    if (dataVersion === "2") {
        data = unzipData(dataString);
    }else{
        data = JSON.parse(dataString) as TData;
    }

    
    
    if (!data) return <>[E1] Invalid data</>
    if (!data.have && !data.want) return <>[E2] Invalid data</>
    if (data.have.length == 0 && data.want.length == 0) return <>[E3] Invalid data</>
    if (data.id.length == 0) return <>[E4] Invalid data</>
    if (data.name.length == 0) return <>[E5] Invalid data</>

    return <Screen {...data} />
}