import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { TopLoan } from 'data/topLoanData';

interface LoanCardProps {
  data: TopLoan;
}

const LoanCard = ({ data }: LoanCardProps) => {
  return (
    <Card>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack spacing={2} alignItems="center" minWidth={190}>
          <div>
            <Typography
              component={Link}
              variant="body1"
              color="text.primary"
              fontWeight={500}
              display="block"
              mb={0.75}
            >
              {data.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight={700}
              display="block"
              mt={0.5}
            >
              {data.price}
            </Typography>
          </div>
        </Stack>
      </Stack>
    </Card>
  );
};

export default LoanCard;
