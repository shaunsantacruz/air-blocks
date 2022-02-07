#!/bin/bash
# @Author: Roni Laukkarinen
# @Date:   2021-11-23 18:09:25
# @Last Modified by:   Roni Laukkarinen
# @Last Modified time: 2022-02-07 16:56:58

# General vars
ENV_FILE="${HOME}/.env_createproject"

# Do we ask for lang or not
if grep -q "AIR_BLOCKS_LANG" ${ENV_FILE}; then
  # If found
  # Get var from env
  AIR_BLOCKS_LANG=$(grep AIR_BLOCKS_LANG $ENV_FILE | cut -d '=' -f2)
else
  # If not found
  echo ""

  # Ask language
  echo "${BOLDYELLOW}Block language:${TXTRESET}
${YELLOW}(Pro tip: Set up AIR_BLOCKS_LANG=en/fi to ${ENV_FILE} if you do not want this to get asked every time)${TXTRESET} "

  echo "
${BOLDGREEN}Available languages:${TXTRESET} "
  echo "en
fi
"

  # Read given lang
  read -e AIR_BLOCKS_LANG

  if ! [[ ${AIR_BLOCKS_LANG} = "fi" || ${AIR_BLOCKS_LANG} = "en" ]]; then
    echo "Language must be ${BOLDGREEN}en${TXTRESET} or ${BOLDGREEN}fi${TXTRESET}."
    exit
  fi
fi

echo ${AIR_BLOCKS_LANG}

# Ask block name
echo "
${BOLDYELLOW}Select block (number):${TXTRESET} "

# Show available blocks
source ${SCRIPTS_LOCATION}/tasks/blocks-available.sh

# Read given block number
read -e BLOCK_NUMBER

# Exit if not number
REGNUMBERS='^[0-9]+$'
if ! [[ $BLOCK_NUMBER =~ $REGNUMBERS ]] ; then
   echo "
${RED}Error: $BLOCK_NUMBER is not a number.${TXTRESET}
";
   exit
fi

# Select block by number
BLOCK_NAME=`ls -1 "${SCRIPTS_LOCATION}/blocks" | sed -n ${BLOCK_NUMBER}p | sed -e 's/\.sh$//'`

# Add extra line break
echo ""

# Ask project name
echo "
${BOLDYELLOW}Project name in lowercase:${TXTRESET} "

# Read given project name
read -e PROJECT_NAME

# Ask theme name
echo "
${BOLDYELLOW}Theme name in lowercase (no spaces or special characters):${TXTRESET} "

# Read given theme name
read -e THEME_NAME

# Add these variables based on asked vars
export PROJECT_PATH="${PROJECTS_HOME}/${PROJECT_NAME}"
export PROJECT_THEME_PATH="${PROJECTS_HOME}/${PROJECT_NAME}/content/themes/${THEME_NAME}"
