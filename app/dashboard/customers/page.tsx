import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

 
export const metadata: Metadata = {
  title: 'Customers',
}; 
export default async function Page( {
    searchParams,
  } : {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
        
    const customers = await fetchFilteredCustomers(query);
    const totalPages = 1;

    return (
      <div className="w-full">
            
             <Suspense fallback={<InvoicesTableSkeleton />}>
              <Table customers={customers}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          </div>
    );
  }