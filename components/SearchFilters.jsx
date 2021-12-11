import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Input,
  Text,
  Select,
  Icon,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      query[item.name] = item.value;
    });

    router.push({ pathname: path, query: query });
  };
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" alignItems="center">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            p="2"
            w="fit-content"
            placeholder={filter.placeholder}
            onClick={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
