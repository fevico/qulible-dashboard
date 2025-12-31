import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// Sample payout data (replace with your API data)
interface Payout {
  id: string;
  userName: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

const samplePayouts: Payout[] = [
  { id: '1', userName: 'John Doe', amount: 150.00, status: 'pending', date: '2023-12-01' },
  { id: '2', userName: 'Jane Smith', amount: 250.00, status: 'approved', date: '2023-12-02' },
  { id: '3', userName: 'Bob Johnson', amount: 100.00, status: 'rejected', date: '2023-12-03' },
  { id: '4', userName: 'Alice Brown', amount: 300.00, status: 'pending', date: '2023-12-04' },
  { id: '5', userName: 'Charlie Wilson', amount: 175.00, status: 'approved', date: '2023-12-05' },
  { id: '6', userName: 'Diana Davis', amount: 220.00, status: 'pending', date: '2023-12-06' },
  { id: '7', userName: 'Eve Miller', amount: 80.00, status: 'rejected', date: '2023-12-07' },
  { id: '8', userName: 'Frank Garcia', amount: 400.00, status: 'approved', date: '2023-12-08' },
  { id: '9', userName: 'Grace Lee', amount: 125.00, status: 'pending', date: '2023-12-09' },
  { id: '10', userName: 'Henry Taylor', amount: 310.00, status: 'approved', date: '2023-12-10' },
  // Add more as needed for testing pagination
];

const PayoutRequest: React.FC = () => {
  const [payouts] = useState<Payout[]>(samplePayouts);
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

  const getStatusBadgeClass = (status: Payout['status']) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container px-6 py-10">
      <div className="rounded-md border">
        <Table>
          <TableHeader>   
            <TableRow>
              <TableHead className="">ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedPayouts.map((payout) => (
              <TableRow key={payout.id}>
                <TableCell className="font-medium">{payout.id}</TableCell>
                <TableCell>{payout.userName}</TableCell>
                <TableCell className="text-right">${payout.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(payout.status)}`}>
                    {payout.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">{payout.date}</TableCell>
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
};

export default PayoutRequest;