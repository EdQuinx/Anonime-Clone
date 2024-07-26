import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from '~/components/AppBar/components/SearchBar/styled'

const SearchBarComponent = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search anime or movie…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search> )
}

export default SearchBarComponent