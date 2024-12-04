import React from 'react';
import CProductClient from '@/components/common/productcontainer/c_product_client';
import { ELabels } from '@/enums/enums_main';
import { SampleBagData } from '@/utils/sampledata';

const CProductsBagsServer = () => {
  return (
    <>
      <CProductClient label={ELabels.bags} productArray={SampleBagData} />
    </>
  );
};

export default CProductsBagsServer;
