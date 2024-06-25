import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow
} from '@/components/Table/TableStructure';

export default function LoadingTable() {
    const skeletonRows = Array.from({ length: 10 }, (_, index) => (
        <TableRow key={index}>
            <TableCell className="animate-pulse h-8" colSpan={6}></TableCell>
        </TableRow>
    ))

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell className="animate-pulse h-12 bg-gray-200"></TableCell>
                    <TableCell className="animate-pulse h-12 bg-gray-200"></TableCell>
                    <TableCell className="animate-pulse h-12 bg-gray-200"></TableCell>
                    <TableCell className="animate-pulse h-12 bg-gray-200"></TableCell>
                    <TableCell className="animate-pulse h-12 bg-gray-200"></TableCell>
                    <TableCell className="animate-pulse h-12 bg-gray-200"></TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>{skeletonRows}</TableBody>
        </Table>
    );
}
