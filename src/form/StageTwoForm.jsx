import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  IconButton,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const StageTwoForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startMonth, setStartMonth] = useState(new Date());
  const [endMonth, setEndMonth] = useState(new Date());

  // Get month name
  const getMonthName = (date) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Get number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get starting day of the week for a month
  const getStartDayOfWeek = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Render calendar header
  const renderHeader = (date, setDate) => (
    <Flex justify="space-between" align="center" mb={4}>
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous month"
        size="sm"
        variant="ghost"
        onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}
      />
      <Text fontSize="lg" fontWeight="bold">
        {getMonthName(date)}
      </Text>
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next month"
        size="sm"
        variant="ghost"
        onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}
      />
    </Flex>
  );

  // Render days of the week
  const renderDays = () => {
    const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    return (
      <Grid templateColumns="repeat(7, 1fr)" mb={2}>
        {daysOfWeek.map((day, i) => (
          <GridItem key={i} textAlign="center">
            <Text fontSize="sm" fontWeight="bold" color="gray.600">
              {day}
            </Text>
          </GridItem>
        ))}
      </Grid>
    );
  };

  // Render calendar cells
  const renderCells = (date, selectedDate, setSelectedDate) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const startDayOfWeek = getStartDayOfWeek(year, month);

    let days = [];

    // Create empty cells for the days from the previous month
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(
        <GridItem key={`empty-${i}`} textAlign="center">
          <Button variant="ghost" size="sm" disabled>
            &nbsp;
          </Button>
        </GridItem>
      );
    }

    // Create cells for the current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const isSelected = selectedDate && selectedDate.toDateString() === currentDate.toDateString();

      days.push(
        <GridItem key={day} textAlign="center">
          <Button
            variant={isSelected ? 'solid' : 'ghost'}
            colorScheme={isSelected ? 'blackAlpha' : 'gray'}
            size="sm"
            onClick={() => setSelectedDate(currentDate)}
          >
            {day}
          </Button>
        </GridItem>
      );
    }

    return (
      <Grid templateColumns="repeat(7, 1fr)" gap={1}>
        {days}
      </Grid>
    );
  };

  return (
    <Box maxW="800px" mx="auto" mt={8} p={4}>
      <Heading mb={4} fontSize="lg">
        When do you want to go?
      </Heading>
      <Text fontSize="sm" color="gray.600" mb={4}>
        Choose a date range or length of stay, up to 7 days.
      </Text>

      <Flex justify="space-between" mb={4}>
        <Box>
          <Text mb={2}>Start Date</Text>
          <Input
            value={startDate ? startDate.toLocaleDateString() : 'Select start date'}
            readOnly
            mb={4}
            placeholder="Start Date"
          />
        </Box>
        <Box>
          <Text mb={2}>End Date</Text>
          <Input
            value={endDate ? endDate.toLocaleDateString() : 'Select end date'}
            readOnly
            mb={4}
            placeholder="End Date"
          />
        </Box>
      </Flex>

      <Flex justify="space-between" gap={4}>
        {/* Start Date Calendar */}
        <Box>
          {renderHeader(startMonth, setStartMonth)}
          {renderDays()}
          {renderCells(startMonth, startDate, setStartDate)}
        </Box>

        {/* End Date Calendar */}
        <Box>
          {renderHeader(endMonth, setEndMonth)}
          {renderDays()}
          {renderCells(endMonth, endDate, setEndDate)}
        </Box>
      </Flex>
    </Box>
  );
};

export default StageTwoForm;
