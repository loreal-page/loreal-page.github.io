import { Flex, Modal, Spin, message } from 'antd';
import Big from 'big.js';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { TotalAmountContext } from '../context';
import './home-content.less';
export const HomeContent = (props) => {
  const { selectSku, addCar, skuList } = props;
  const [open, setOpen] = useState(false);

  const { totalAmount, updateTotalAmount } = useContext(TotalAmountContext);
  const [size, setSize] = useState(selectSku?.stocks?.[0]);

  const [addQuantity, setAddQuantity] = useState(1);

  const [loading, setLoading] = useState(false);

  const selectSkuCard = () => {
    setOpen(true);
  };

  const selectSize = (item) => {
    setSize(item);
    setAddQuantity(1);
  };

  const minus = () => {
    if (size?.quantity === 0 || addQuantity === 1) return;
    setAddQuantity(addQuantity - 1);
  };

  const add = () => {
    if (addQuantity === size?.quantity || size?.quantity === 0) return;
    setAddQuantity(addQuantity + 1);
  };

  const handleAddCar = () => {
    if (size?.quantity === 0) {
      message.warning('商品已售罄');
      return;
    }
    const addSku = {
      id: selectSku?.id,
      name: selectSku?.name,
      add_quantity: addQuantity,
      size: size,
      type: selectSku?.type,
    };
    const latestTotalAmount = Big(totalAmount)
      .add(Big(addSku.add_quantity).times(addSku.size.inner_price))
      .toNumber()
      .toFixed(2);
    updateTotalAmount(latestTotalAmount);

    setLoading(true);
    setTimeout(() => {
      addCar(addSku);
      message.success('添加购物车成功');
      setLoading(false);
      setOpen(false);
    }, 1000);
  };

  return (
    <Flex
      className="home-content-container"
      vertical
      justify="center"
      align="center"
    >
      <div className="header-cump">{`首页  >  搜索结果  >  ${selectSku?.name}`}</div>
      <Flex className="tag" justify="space-between" align="center">
        <Flex>
          <div className="tag-item">综合</div>
          <div className="tag-item">销量</div>
          <div className="tag-item">价格</div>
        </Flex>
        <div className="type-tag">{'彩妆'}</div>
      </Flex>
      <Flex className="card-container" justify="start" wrap="wrap">
        <div className="sku-card" onClick={selectSkuCard}>
          <div className="sku-img">照片</div>
          <div className="name">
            {selectSku?.name.length > 16
              ? `${selectSku?.name.slice(0, 16)}...`
              : selectSku?.name}
          </div>
          <div className="name inner">
            内购价：
            <span
              style={{ fontSize: '18px' }}
            >{`¥${selectSku?.stocks[0].inner_price}`}</span>
          </div>
          <div className="name market">
            市场价：<span>{`¥${selectSku?.stocks[0].market_price}`}</span>
          </div>
          <div className="sku-type">{'彩妆'}</div>
        </div>
      </Flex>

      <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
        <Flex className="selected-sku-modal">
          {!loading ? (
            <>
              <div className="sku-img">照片</div>
              <Flex
                className="sku-introduction"
                vertical
                justify="space-between"
              >
                <div className="sku-type">{'彩妆'}</div>
                <div className="sku-name">{selectSku?.name}</div>
                <div className="sku-status">{`${size?.time}/${
                  size?.broken
                }`}</div>
                <div className="sku-limit-buy-quantity">最低限购数：{'1'}</div>
                <Flex className="sku-price" align="center">
                  <div className="inner">内购价：¥{size?.inner_price}</div>
                  <div className="market">市场价：¥{size?.market_price}</div>
                </Flex>
                <Flex className="sku-size-select" vertical align="start">
                  <div className="title">规格</div>
                  <Flex className="size-items">
                    {selectSku?.stocks.map((item) => {
                      return (
                        <div
                          className={classNames('size-item', {
                            selected: size?.size === item.size,
                          })}
                          onClick={() => {
                            selectSize(item);
                          }}
                        >
                          {item.size}
                        </div>
                      );
                    })}
                  </Flex>
                </Flex>
                <Flex className="sku-add-count">
                  <div
                    className={classNames('quantity-btn', {
                      disabled: size?.quantity === 0 || addQuantity === 1,
                    })}
                    onClick={minus}
                  >
                    -
                  </div>
                  <div className="quantity">{addQuantity}</div>
                  <div
                    className={classNames('quantity-btn', {
                      disabled:
                        addQuantity === size?.quantity || size?.quantity === 0,
                    })}
                    onClick={add}
                  >
                    +
                  </div>
                  <div
                    className={classNames('stock-quantity', {
                      none: size?.quantity === 0,
                    })}
                  >
                    {size?.quantity === 0
                      ? '已售罄'
                      : size?.quantity > 999
                      ? '库存999+'
                      : `库存${size?.quantity}`}
                  </div>
                </Flex>
                <div className="add-shopping-car-btn" onClick={handleAddCar}>
                  加入购物车
                </div>
              </Flex>
            </>
          ) : (
            <Spin
              style={{
                width: '960px',
                height: '350px',
                margin: '0 auto',
                padding: '60px 0,',
              }}
              size="large"
            />
          )}
        </Flex>
      </Modal>
    </Flex>
  );
};
