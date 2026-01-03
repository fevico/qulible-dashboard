import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

interface Payout {
  id: string;
  item: string;
  vendor: string;
  category: string;
  price: number;
}

const sampleBestSelling: Payout[] = [
  { id: '1', item: 'Bread', vendor: 'John Doe', category: 'Electronics', price: 150.00, },
  { id: '2', item: 'Milk', vendor: 'Jane Smith', category: 'Clothing', price: 250.00, },
  { id: '3', item: 'Eggs', vendor: 'Bob Johnson', category: 'Home & Kitchen', price: 100.00, },
  { id: '4', item: 'Cheese', vendor: 'Alice Brown', category: 'Books', price: 300.00, },
  { id: '5', item: 'Butter', vendor: 'Charlie Wilson', category: 'Beauty & Personal Care', price: 175.00, },
  { id: '6', item: 'Yogurt', vendor: 'Diana Davis', category: 'Sports & Outdoors', price: 220.00, },
  { id: '7', item: 'Eba and Egusi', vendor: 'Eve Miller', category: 'Electronics', price: 80.00, },
  { id: '8', item: 'Amala', vendor: 'Frank Garcia', category: 'Clothing', price: 400.00, },
  { id: '9', item: 'Fufu', vendor: 'Grace Lee', category: 'Home & Kitchen', price: 125.00,  },
  { id: '10', item: 'Suya', vendor: 'Henry Taylor', category: 'Books', price: 310.00, },
  // Add more as needed for testing pagination
];

const ResturantList = () => {
         const [payouts] = useState<Payout[]>(sampleBestSelling);
          const [currentPage, setCurrentPage] = useState(1);
          const itemsPerPage = 5; // Adjust as needed
        
          const totalPages = Math.ceil(payouts.length / itemsPerPage);
          const paginatedPayouts = payouts.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          );
        
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };    
        
          return (
            <div className="container px-6 py-10">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>   
                    <TableRow>
                      <TableHead className="">ID</TableHead>
                      <TableHead className="">Item</TableHead>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedPayouts.map((bestSelling) => (
                      <TableRow key={bestSelling.id}>
                        <TableCell>{bestSelling.id}</TableCell>
                        <TableCell>{bestSelling.item}</TableCell>
                        <TableCell>{bestSelling.vendor}</TableCell>
                        <TableCell className="font-medium">{bestSelling.category}</TableCell>
                        <TableCell className="">${bestSelling.price.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
        
              {totalPages > 1 && (
                <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
                  <div className="text-sm text-gray-700">
                    Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                    <span className="font-medium">{Math.min(currentPage * itemsPerPage, payouts.length)}</span> of{' '}
                    <span className="font-medium">{payouts.length}</span> results
                  </div>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) handlePageChange(currentPage - 1);
                          }}
                        />
                      </PaginationItem>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            isActive={currentPage === page}
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(page);
                            }}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages) handlePageChange(currentPage + 1);
                          }}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
            );
}  
 
export default ResturantList;